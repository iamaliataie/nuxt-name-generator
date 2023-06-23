interface Name {
  id: Number,
  name: String,
  gender: Gender,
  length: Length
}

export enum Gender {
  BOY = "Boy",
  GIRL = "Girl",
}

export enum Length {
  SHORT = "Short",
  LONG = "Long",
  ALL = "All",
}

export const names: Name[] = [
  {
    id: 1,
    name: "Ali",
    gender: Gender.BOY,
    length: Length.SHORT
  },
  {
    id: 2,
    name: "Mohmmad Iqbal",
    gender: Gender.BOY,
    length: Length.LONG
  },
  {
    id: 3,
    name: "Elizabeth",
    gender: Gender.GIRL,
    length: Length.LONG
  },
  {
    id: 4,
    name: "Mary",
    gender: Gender.GIRL,
    length: Length.SHORT
  },
]