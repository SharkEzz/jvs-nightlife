CREATE TABLE `game` (
	`id` integer PRIMARY KEY NOT NULL,
	`mode` text NOT NULL,
	`map_id` integer NOT NULL,
	`session_id` integer NOT NULL,
	FOREIGN KEY (`map_id`) REFERENCES `map`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`session_id`) REFERENCES `session`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `map` (
	`id` integer PRIMARY KEY NOT NULL,
	`name` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `session` (
	`id` integer PRIMARY KEY NOT NULL,
	`date` integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE `session_team_user` (
	`id` integer PRIMARY KEY NOT NULL,
	`user_id` integer NOT NULL,
	`session_id` integer NOT NULL,
	`team` text NOT NULL,
	FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`session_id`) REFERENCES `session`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `user` (
	`id` integer PRIMARY KEY NOT NULL,
	`first_name` text NOT NULL,
	`last_name` text NOT NULL,
	`player_name` text NOT NULL,
	`profile_url` text,
	`est_jvs` integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE `user_game_result` (
	`id` integer PRIMARY KEY NOT NULL,
	`game_id` integer NOT NULL,
	`user_id` integer NOT NULL,
	`kill` integer NOT NULL,
	`death` integer NOT NULL,
	`assist` integer NOT NULL,
	`score` integer NOT NULL,
	FOREIGN KEY (`game_id`) REFERENCES `game`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE UNIQUE INDEX `map_name_unique` ON `map` (`name`);