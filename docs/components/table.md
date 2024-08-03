# Table

A responsive table component.

## CLI

```sh
npx @artyominc/ui add table
```

## Preview

<ClientOnly>
  <ExampleOfTable />
</ClientOnly>

## Code

```vue
<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Icon } from '@iconify/vue'

const invoices = [
  {
    action: {
      achieve: () => {
        alert('[INV001] done')
      }
    },
    invoice: 'INV001',
    paymentMethod: 'Credit Card',
    paymentStatus: 'Paid',
    totalAmount: '$250.00'
  },
  {
    action: {
      achieve: () => {
        alert('[INV002] done')
      }
    },
    invoice: 'INV002',
    paymentMethod: 'PayPal',
    paymentStatus: 'Pending',
    totalAmount: '$150.00'
  },
  {
    action: {
      achieve: () => {
        alert('[INV003] done')
      }
    },
    invoice: 'INV003',
    paymentMethod: 'Bank Transfer',
    paymentStatus: 'Unpaid',
    totalAmount: '$350.00'
  },
  {
    action: {
      achieve: () => {
        alert('[INV004] done')
      }
    },
    invoice: 'INV004',
    paymentMethod: 'Credit Card',
    paymentStatus: 'Paid',
    totalAmount: '$450.00'
  }
]
</script>

<template>
  <Table>
    <TableHeader>
      <TableRow>
        <TableHead class="w-[100px]"> Invoice </TableHead>
        <TableHead>Status</TableHead>
        <TableHead>Method</TableHead>
        <TableHead> Amount </TableHead>
        <TableHead>Action</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow v-for="invoice in invoices" :key="invoice.invoice">
        <TableCell class="font-medium">
          {{ invoice.invoice }}
        </TableCell>
        <TableCell>{{ invoice.paymentStatus }}</TableCell>
        <TableCell>{{ invoice.paymentMethod }}</TableCell>
        <TableCell>
          {{ invoice.totalAmount }}
        </TableCell>
        <TableCell>
          <Button size="icon" @click="invoice.action.achieve">
            <Icon icon="lucide:archive" />
          </Button>
        </TableCell>
      </TableRow>
    </TableBody>
  </Table>
</template>
```
