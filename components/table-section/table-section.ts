
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-table-section',
  imports: [CommonModule, FormsModule],
  templateUrl: './table-section.html',
  styleUrl: './table-section.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableSection {
  columns = [
    { key: 'orderId', label: 'Order ID' },
    { key: 'customer', label: 'Customer' },
    { key: 'product', label: 'Product' },
    { key: 'quantity', label: 'Qty' },
    { key: 'status', label: 'Status' },
    { key: 'total', label: 'Total' },
  ];

  data: any[] = [
    { orderId: 'A001', customer: 'Ivan Petrov', product: 'Widget X', quantity: 2, status: 'Pending', total: 49.98 },
    { orderId: 'A002', customer: 'Olena Kov', product: 'Gadget Pro', quantity: 1, status: 'Shipped', total: 129.0 },
    { orderId: 'A003', customer: 'John Doe', product: 'Widget X', quantity: 5, status: 'Delivered', total: 124.95 },
    { orderId: 'A004', customer: 'Maria Ivanova', product: 'Accessory', quantity: 3, status: 'Cancelled', total: 29.97 },
  ];

  filter = '';
  sortKey: string | null = null;
  sortDir: 1 | -1 = 1;

  get filtered() {
    const f = (this.filter || '').toLowerCase();
    let result = this.data.filter((r) => {
      if (!f) return true;
      return Object.values(r).some((v) => String(v).toLowerCase().includes(f));
    });
    if (this.sortKey) {
      result = result.sort((a: any, b: any) => {
        const va = a[this.sortKey!];
        const vb = b[this.sortKey!];
        if (va == vb) return 0;
        return va > vb ? this.sortDir : -this.sortDir;
      });
    }
    return result;
  }

  sortBy(key: string) {
    if (this.sortKey === key) {
      this.sortDir = this.sortDir === 1 ? -1 : 1;
    } else {
      this.sortKey = key;
      this.sortDir = 1;
    }
  }

  statusClass(status: string) {
    switch (status) {
      case 'Pending':
        return 'has-text-warning';
      case 'Shipped':
        return 'has-text-info';
      case 'Delivered':
        return 'has-text-success';
      case 'Cancelled':
        return 'has-text-danger';
      default:
        return '';
    }
  }
}
