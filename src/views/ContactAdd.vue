<template>
    <div class="p-4 max-w-md mx-auto">
      <h2 class="text-xl font-bold mb-4">Thêm liên hệ mới</h2>
      <form @submit.prevent="handleSubmit" class="space-y-4">
        <div>
          <label class="block mb-1 font-medium">Tên:</label>
          <input v-model="contact.name" type="text" class="w-full border p-2 rounded" required />
        </div>
        <div>
          <label class="block mb-1 font-medium">Số điện thoại:</label>
          <input v-model="contact.phone" type="text" class="w-full border p-2 rounded" required />
        </div>
        <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Lưu
        </button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  import axios from 'axios'
  
  const router = useRouter()
  
  const contact = ref({
    name: '',
    phone: '',
  })
  
  const handleSubmit = async () => {
    try {
      await axios.post('/api/contacts', contact.value)
      router.push('/contacts') // chuyển về danh sách sau khi thêm
    } catch (error) {
      console.error('Lỗi khi thêm liên hệ:', error)
      alert('Thêm liên hệ thất bại.')
    }
  }
  </script>
