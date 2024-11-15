<script setup lang="ts">
import { Card } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
</script>

<template>
  <Tabs default-value="account" class="w-[400px]">
    <TabsList class="grid w-full grid-cols-2">
      <TabsTrigger value="account"> Account </TabsTrigger>
      <TabsTrigger value="password"> Password </TabsTrigger>
    </TabsList>
    <TabsContent value="account">
      <Card class="flex items-center justify-center p-5"> account </Card>
    </TabsContent>
    <TabsContent value="password">
      <Card class="flex items-center justify-center p-5"> password </Card>
    </TabsContent>
  </Tabs>
</template>