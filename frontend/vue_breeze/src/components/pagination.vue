<template>
    <nav aria-label="Page navigation example" class="mt-5">
        <ul class="inline-flex items-center -space-x-px" :class="customClass">
            <li class="previous-page" @click.prevent="changePage(prevPage)">
                <button
                    type="button"
                    href="#"
                    aria-label="Previous"
                    class="block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700"
                    :class="{
                        Disabled: !hasPrev
                    }"
                    
                >
                    <span class="sr-only">Previous</span>
                    <svg
                        aria-hidden="true"
                        class="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                            clip-rule="evenodd"
                        ></path>
                    </svg>
                </button>
            </li>

            <li
                @click.prevent="changePage(page)"
                class="px-3 py-2 leading-tight border "
                :class="{
                    'bg-blue-500 text-white': current == page,
                    'bg-white text-gray-500 hover:bg-gray-100 hover:text-gray-700': current != page,
                }"
                v-for="page in pages"
            >
                <a href="#" v-text="page"></a>
            </li>

            <li class="next-page" @click.prevent="changePage(nextPage)">
                <a
                    class="block px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    href="#"
                    aria-label="Next"
                    :class="{
                        Disabled: !hasNext
                    }"
                >
                    <span class="sr-only">Next</span>
                    <svg
                        aria-hidden="true"
                        class="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clip-rule="evenodd"
                        ></path>
                    </svg>
                </a>
            </li>
        </ul>
    </nav>
</template>

<script>
import { initFlowbite } from "flowbite";
export default {
    props: {
        current: {
            type: Number,
            default: 1,
            required: true,
        },
        total: {
            type: Number,
            default: 0,
            required: true,
        },
        perPage: {
            type: Number,
            default: 0,
            required: true,
        },
        pageSidesRange: {
            type: Number,
            default: 3,
        },
        customClass: {
            type: String,
            default: "custom-pagination-class",
        },
    },

    computed: {
        pages() {
            var pages = [];

            for (var i = this.rangeStart; i <= this.rangeEnd; i++) {
                pages.push(i);
            }

            return pages;
        },
        rangeStart() {
            let start = this.current - this.pageSidesRange;
            return start > 0 ? start : 1;
        },
        rangeEnd() {
            let end = this.current + this.pageSidesRange;
            return end < this.totalPages ? end : this.totalPages;
        },
        totalPages() {
            return Math.ceil(this.total / this.perPage);
        },
        nextPage() {
            return this.current + 1;
        },
        prevPage() {
            return this.current - 1;
        },
        hasPrev() {
            
            return this.current > 1;
        },
        hasNext() {
            return this.current < this.totalPages;
        },
    },

    methods: {
        changePage(page) {
            this.$emit("page-changed", page);
        },
    },
    mounted() {
        initFlowbite();
        
    },
};
</script>
<style>
.Disabled {
    pointer-events: none;
    cursor: not-allowed;
    opacity: 0.65;
    filter: alpha(opacity=65);
    -webkit-box-shadow: none;
    box-shadow: none;
}
</style>
