<template>
      <div class="contact-book">
        <InputSearch v-model="searchText" />
        <ContactList
          :contacts="filteredContacts"
          @select="activeIndex = $event"
        />
        <ContactCard :contact="activeContact" />
      </div>
    </template>
    
    <script setup>
    import { ref, computed, onMounted } from 'vue'
    import InputSearch from '@/components/InputSearch.vue'
    import ContactList from '@/components/ContactList.vue'
    import ContactCard from '@/components/ContactCard.vue'
    import ContactService from '@/services/ContactService'
    
    const contacts = ref([])
    const searchText = ref('')
    const activeIndex = ref(-1)
    
    const activeContact = computed(() => contacts.value[activeIndex.value] || {})
    
    const filteredContacts = computed(() =>
      contacts.value.filter(contact =>
        contact.name.toLowerCase().includes(searchText.value.toLowerCase())
      )
    )
    
    onMounted(async () => {
      contacts.value = await ContactService.getAll()
    })
    </script>
    
    <style scoped>
    /* Tuỳ chỉnh CSS nếu cần */
    </style>