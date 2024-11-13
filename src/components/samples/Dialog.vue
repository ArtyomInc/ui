<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Dialog } from '@/components/ui/dialog'
import { ref } from 'vue'

const isOpen = ref(false)
</script>

<template>
  <Button @click="isOpen = true">Open Modal</Button>
  <Dialog v-model="isOpen">
    <div class="flex flex-col p-3">
      <h2 class="text-xl font-bold">Lorem ipsum dolor sit amet.</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde saepe quos porro natus dolore, dolores pariatur
        rem, repellendus accusamus fugit expedita animi repudiandae ut placeat.
      </p>
      <div class="mt-2 flex justify-end gap-2">
        <Button variant="primary" @click="isOpen = false">Confirm</Button>
        <Button @click="isOpen = false">Close</Button>
      </div>
    </div>
  </Dialog>
</template>
