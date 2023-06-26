class User {
  constructor(name, age, listPermissions) {
    this.name = name
    this.age = age
    this.listPermissions = listPermissions
  }

  sigIn() {
    console.log('Вы вошли')
  }

  logOut() {
    console.log('Вы вышли')
  }
}

class Admin extends User {
  constructor(listBans) {
    super()
    this.listBans = listBans
  }

  addBan() {
    console.log('Пользователь забанен')
  }

  addPermision() {
    console.log('Привилегия добавлена')
  }
}

class Manager extends Admin {
  constructor() {
    super()
  }

  showListBans() {
    console.log('Показываю список забаненных пользователей')
  }
}

class GeneralUser extends User {
  constructor() {
    super()
  }

  showName() {
    console.log('Показываю имя пользователя')
  }
}