import { Entity, ObjectID, ObjectIdColumn, Column } from 'typeorm'

@Entity('announcements')
export class Announcement {
  @ObjectIdColumn()
  id: ObjectID

  @Column()
  title: string

  @Column()
  date: string

  @Column()
  description: string

  constructor(announcement?: Partial<Announcement>) {
    Object.assign(this, announcement)
  }
}
