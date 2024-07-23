class Place {
  id: number
  title: string
  highlighted: boolean
  type: string
  assessment: number
  description: string
  image: string
  menu: string[]

  constructor(
    id: number,
    title: string,
    highlighted: boolean,
    type: string,
    assessment: number,
    description: string,
    image: string,
    menu: string[]
  ) {
    this.id = id
    this.title = title
    this.highlighted = highlighted
    this.type = type
    this.assessment = assessment
    this.description = description
    this.image = image
    this.menu = menu
  }
}

export default Place
