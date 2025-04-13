export default function handler(req, res) {
    const nic = req.query.nic || "A000000";
  
    const firstNames = ["Ibrahim", "Aminath", "Mohamed", "Zuleikha", "Hassan", "Mariyam", "Fathimath", "Ali", "Reema"];
    const lastNames = ["Nasru", "Zareena", "Ali", "Shareef", "Rasheed", "Naseem", "Latheef", "Saeed", "Hameed"];
    const islands = {
      "S": ["Hulhudhoo", "Meedhoo", "Feydhoo"],
      "K": ["Male'", "Hulhumale'", "Villingili"],
      "L": ["Fonadhoo", "Gan", "Kadhdhoo"],
      "AA": ["Rasdhoo", "Ukulhas", "Mathiveri"],
      "Dh": ["Kudahuvadhoo", "Meedhoo", "Maaenboodhoo"]
    };
  
    function pickRandom(array) {
      return array[Math.floor(Math.random() * array.length)];
    }
  
    function asciiMock(text) {
      return text.split("").reverse().join("");
    }
  
    const sex = Math.random() > 0.5 ? "m" : "f";
    const firstName = pickRandom(firstNames);
    const lastName = pickRandom(lastNames);
    const nameFull = `${firstName} ${lastName}`;
    const atollCode = pickRandom(Object.keys(islands));
    const island = pickRandom(islands[atollCode]);
    const homeName = "Feeroazge";
  
    const randomDOB = new Date(1975 + Math.floor(Math.random() * 30), Math.floor(Math.random() * 12), Math.floor(Math.random() * 28));
    const dobString = randomDOB.toISOString().split("T")[0] + "T00:00:00";
    const expiryDate = new Date(randomDOB.getFullYear() + 50, randomDOB.getMonth(), randomDOB.getDate()).toISOString().split("T")[0] + "T00:00:00";
  
    const data = {
      nic,
      name_first: firstName,
      name_first_dhivehi: asciiMock(firstName),
      name_middle: "",
      name_middle_dhivehi: "",
      name_last: lastName,
      name_last_dhivehi: asciiMock(lastName),
      name_common: lastName,
      name_common_dhivehi: asciiMock(lastName),
      name_full: nameFull,
      name_full_dhivehi: `${asciiMock(lastName)} ${asciiMock(firstName)}`,
      sex,
      date_of_birth: dobString,
      address_home_name: homeName,
      address_home_name_dhivehi: asciiMock(homeName),
      address_island_name: island,
      address_island_name_dhivehi: asciiMock(island),
      address_atoll_name: atollCode,
      address_atoll_name_dhivehi: asciiMock(atollCode),
      date_expiry: expiryDate,
      serial: "SN1234567"
    };
  
    res.status(200).json({ data });
  }
  