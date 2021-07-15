const firstNames = ['Vượng', 'Thảo', 'Hải', 'Linh', 'My', 'Hưng', 'Thành'];
const middleNames = ['Nhật', 'Thị Phương', 'Ngọc', 'Hoài', 'Khởi', 'Vĩnh', 'Trần'];
const lastNames = ['Phạm', 'Nguyễn', 'Đoàn', 'Đàm', 'Đặng'];

export const randomIntNumber = (max) => {
  return parseInt(Math.floor(Math.random() * max));
};

export const randomName = () => {
  const firstName = firstNames[randomIntNumber(firstNames.length - 1)];
  const middleName = middleNames[randomIntNumber(middleNames.length - 1)];
  const lastName = lastNames[randomIntNumber(lastNames.length - 1)];
  return {
    firstName,
    middleName,
    lastName,
  };
};

export const PRIORITIES = ['low', 'normal', 'high', 'urgent'];
