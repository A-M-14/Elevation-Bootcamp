class AutoCompleteWebUI {
    constructor() {
        this.trie = new AutoCompleteTrie();
        this.wordsInDictionary = [];
        this.currentSuggestions = [];
        
        this.initializeElements();
        this.bindEvents();
    }

    initializeElements() {
        this.addWordInput = document.getElementById('addWordInput');
        this.addWordBtn = document.getElementById('addWordBtn');
        this.searchInput = document.getElementById('searchInput');
        
        this.addWordMessage = document.getElementById('addWordMessage');
        this.searchMessage = document.getElementById('searchMessage');
        
        this.suggestionsContainer = document.getElementById('suggestionsContainer');
        this.wordCountDisplay = document.querySelector('.word-count');
    }

    bindEvents() {
        this.addWordBtn.addEventListener('click', () => this.addWord());
        this.addWordInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.addWord();
            }
        });

        this.searchInput.addEventListener('input', (e) => {
            this.handleSearch(e.target.value);
        });

        document.addEventListener('click', (e) => {
            if (!this.searchInput.contains(e.target) && !this.suggestionsContainer.contains(e.target)) {
                this.hideSuggestions();
            }
        });

        this.addWordInput.addEventListener('input', () => {
            this.clearMessage(this.addWordMessage);
        });

        this.searchInput.addEventListener('focus', () => {
            if (this.searchInput.value.trim()) {
                this.handleSearch(this.searchInput.value);
            }
        });
    }

    addWord() {
        const word = this.addWordInput.value.trim();
        
        if (!word) {
            this.showMessage(this.addWordMessage, 'Can not find an empty word!', 'error');
            return;
        }

        if (!/^[a-zA-Z]+$/.test(word)) {
            this.showMessage(this.addWordMessage, 'Word must contain only letters', 'error');
            return;
        }

        if (this.trie.findWord(word)) {
            this.showMessage(this.addWordMessage, `"${word}" is already in the dictionary`, 'error');
            return;
        }

        this.trie.addWord(word);
        this.wordsInDictionary.push(word);
        
        this.showMessage(this.addWordMessage, `Added "${word}" to dictionary`, 'success');
        this.addWordInput.value = '';
        this.updateWordCount();

        setTimeout(() => {
            this.clearMessage(this.addWordMessage);
        }, 3000);
    }

    handleSearch(query) {
        const trimmedQuery = query.trim();
        
        if (!trimmedQuery) {
            this.hideSuggestions();
            this.clearMessage(this.searchMessage);
            return;
        }

        const suggestions = this.trie.predictWords(trimmedQuery);
        this.currentSuggestions = suggestions;

        if (suggestions.length > 0) {
            this.showSuggestions(suggestions, trimmedQuery);
            this.clearMessage(this.searchMessage);
        } else {
            this.hideSuggestions();
            this.showMessage(this.searchMessage, 
                `No suggestions found for "${trimmedQuery}"`, 
                'error'
            );
        }
    }

    showSuggestions(suggestions, query) {
        this.suggestionsContainer.innerHTML = '';
        
        suggestions.forEach((suggestion, index) => {
            const suggestionElement = document.createElement('div');
            suggestionElement.className = 'suggestion-item';
            
            const queryLower = query.toLowerCase();
            const suggestionLower = suggestion.toLowerCase();
            
            if (suggestionLower.startsWith(queryLower)) {
                const prefix = suggestion.substring(0, query.length);
                const remainder = suggestion.substring(query.length);
                suggestionElement.innerHTML = `<strong>${prefix}</strong>${remainder}`;
            } else {
                suggestionElement.textContent = suggestion;
            }
            
            suggestionElement.addEventListener('click', () => {
                this.selectSuggestion(suggestion);
            });
            
            this.suggestionsContainer.appendChild(suggestionElement);
        });
        
        this.suggestionsContainer.classList.add('show');
    }

    hideSuggestions() {
        this.suggestionsContainer.classList.remove('show');
    }

    selectSuggestion(suggestion) {
        this.searchInput.value = suggestion;
        this.hideSuggestions();
        this.clearMessage(this.searchMessage);
    }

    showMessage(element, message, type) {
        element.textContent = message;
        element.className = `message ${type}`;
    }

    clearMessage(element) {
        element.textContent = '';
        element.className = 'message';
    }

    updateWordCount() {
        this.wordCountDisplay.textContent = this.wordsInDictionary.length;
    }
}

// Initialize the application when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new AutoCompleteWebUI();
});
