<script>
export default {
    props: {
        contacts: { type: Array, default: [] },
        activeIndex: { type: Number, default: -1 },
    },
    emits: ["update:activeIndex"],
    methods: {
        updateActiveIndex(index) {
            this.$emit("update:activeIndex", index);
        }
    }
};
</script>
<template>
    <ul class="list-group">
        <li class="list-group-item">
        </li>
    </ul>
    :key="contact._id"
    v-for="(contact, index) in contacts"
    :class="{ active: index === activeIndex }"
    @click="updateActiveIndex(index)"
    {{ contact.name }}
</template>