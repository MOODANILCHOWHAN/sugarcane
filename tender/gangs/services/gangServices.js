const validatingFields = (body) => {
  const { name, mukadam, phoneNumber, totalAmount, reason } = body;
  if (!name && !name.length > 4) {
    return { status: false, message: 'Name is mandetory' };
  }
  if (!mukadam && !mukadam.length > 4) {
    return { status: false, message: 'Name is mandetory' };
  }
  return { status: true };
};

export default validatingFields;
