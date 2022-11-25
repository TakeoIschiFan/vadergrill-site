/**
* This file was @generated using pocketbase-typegen
*/

export enum Collections {
	Activiteiten = "activiteiten",
	Tickets = "tickets",
	Users = "users",
}

// Alias types for improved usability
export type IsoDateString = string
export type RecordIdString = string

// System fields
export type BaseSystemFields = {
	id: RecordIdString
	created: IsoDateString
	updated: IsoDateString
	collectionId: string
	collectionName: Collections
	expand?: { [key: string]: any }
}

export type AuthSystemFields = {
	email: string
	emailVisibility: boolean
	username: string
	verified: boolean
} & BaseSystemFields

// Record types for each collection

export type ActiviteitenRecord = {
	titel: string
	beschrijving?: string
	banner?: string
	slug?: string
	tickets?: RecordIdString
}

export type TicketsRecord = {
	activiteit: RecordIdString
	user: RecordIdString
	betaald?: boolean
	gescand?: boolean
}

export type UsersRecord = {
	name?: string
	avatar?: string
}

// Response types include system fields and match responses from the PocketBase API
export type ActiviteitenResponse = ActiviteitenRecord & BaseSystemFields
export type TicketsResponse = TicketsRecord & BaseSystemFields
export type UsersResponse = UsersRecord & AuthSystemFields

export type CollectionRecords = {
	activiteiten: ActiviteitenRecord
	tickets: TicketsRecord
	users: UsersRecord
}