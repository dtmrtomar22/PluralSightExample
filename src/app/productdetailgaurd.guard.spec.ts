import { TestBed, async, inject } from '@angular/core/testing';

import { ProductdetailgaurdGuard } from './productdetailgaurd.guard';

describe('ProductdetailgaurdGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductdetailgaurdGuard]
    });
  });

  it('should ...', inject([ProductdetailgaurdGuard], (guard: ProductdetailgaurdGuard) => {
    expect(guard).toBeTruthy();
  }));
});
