
var app = new Vue({
    el: '#aup_in_focus',
    data: {
        stories: [],
        interests: [],
        filteredStories: [],
        selectedInterest: null,
    },
    created() {
    },
    mounted() {

        /* remove wrapper */
        var wrapper = document.querySelector('#aup_in_focus .field-collection-container');
        wrapper.outerHTML = wrapper.innerHTML;

        var lineItem = Array.from(document.querySelectorAll('#aup_in_focus .field-collection-view'))
        lineItem.forEach((arrayElement, index) => {
            lineItem[index].className += " story_static--" + index;
        });

        /* get all stories from API */
        axios.get('/api/aup-in-focus-stories')
            .then(response => {
                this.stories = response.data;
                this.filteredStories = this.getRandom(this.stories, 3);
            });

        /* get all interest from API */
        axios.get('/api/interests')
            .then(response => (
                this.interests = response.data
            ));
    },
    methods: {
        onChangeInterest(event) {
            this.selectedInterest = event.target.value
            this.getFilteredStories();
        },
        reloadStories() {
            this.getFilteredStories();
        },
        getFilteredStories() {
            var filteredStories;
            if (this.selectedInterest) {
                filteredStories = this.stories.filter(item => item.interests_tids.includes(this.selectedInterest));
            }
            else {
                filteredStories = this.stories;
            }

            this.filteredStories = this.getRandom(filteredStories, 3)
        },
        getRandom(arr, n) {
            var result = new Array(n),
                len = arr.length,
                taken = new Array(len);
            if (n > len)
                throw new RangeError("getRandom: more elements taken than available");
            while (n--) {
                var x = Math.floor(Math.random() * len);
                result[n] = arr[x in taken ? taken[x] : x];
                taken[x] = --len in taken ? taken[len] : len;
            }
            return result;
        }
    }


})