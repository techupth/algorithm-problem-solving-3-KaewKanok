function sortCustomerName(customers) {
  // เริ่มเขียนโค้ดตรงนี้จ้า
  for (let i = 0; i < customers.length - 1; i++) {
    for (let j = 0; j < customers.length - 1 - i; j++) {
      if (customers[j] > customers[j + 1]) {
        let temp = customers[j];
        customers[j] = customers[j + 1];
        customers[j + 1] = temp;
      }
    }
  }
  return customers;
}

// ตอบคำถามตรงนี้จ้า
//Bubble Sort Algorithm มี Big O เป็น O(n²) เพราะว่า จำนวนรอบเพิ่มขึ้นตามกำลังสองของขนาดข้อมูล

customers = ["Somchai", "Arthit", "Suchada", "Napasorn", "Pimchanok"];
console.log(sortCustomerName(customers));
