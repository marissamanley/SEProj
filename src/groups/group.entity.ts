import { Entity, ObjectID, ObjectIdColumn, Column } from 'typeorm'

@Entity('groups')
export class Group {
  @ObjectIdColumn()
  id: ObjectID

  @Column()
  name: string

  @Column()
  game: string

  @Column({ nullable: true })
  url?: string

  @Column()
  description: string

  @Column()
  pictureUrl: string

  constructor(group?: Partial<Group>) {
    Object.assign(this, group)
  }
}
