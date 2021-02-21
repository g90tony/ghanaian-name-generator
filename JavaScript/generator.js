const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi"];

const femaleNames = ["Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

const state = {
  gender: null,
  birthDate: null,
  birthDay: null,
  name: null,
  selectedNamesPool: [],
};

// setters for state

const setGender = () => {
  state.gender = document.getElementById("genderSelector").value;
  state.selectedNamesPool = state.gender === "male" ? maleNames : femaleNames;
  console.log(state.gender);
  console.log(state.selectedNamesPool);
};

const setBirthDate = () => {
  const date = new Date(document.getElementById("dateSelector").value);
  state.birthDate = date;
  state.birthDay = date.getDay();
  console.log(state);
};
