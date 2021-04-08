import { Entity, ObjectID, ObjectIdColumn, Column } from 'typeorm'

@Entity('events')
export class Event {
  @ObjectIdColumn()
  id: ObjectID

  @Column()
  title: string

  @Column()
  location: string

  @Column({ array: true })
  games: string[]

  @Column({ nullable: true })
  url?: string

  @Column()
  description: string

  constructor(event?: Partial<Event>) {
    Object.assign(this, event)
  }
}
