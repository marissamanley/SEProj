import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm'

@Entity('games')
export class Game {
  @ObjectIdColumn()
  id: ObjectID

  @Column()
  title: string

  @Column()
  genre: string

  @Column({ nullable: true })
  url?: string

  @Column()
  description: string

  @Column()
  pictureUrl: string

  constructor(game?: Partial<Game>) {
    Object.assign(this, game)
  }
}
