import { createJoymap, createQueryModule, QueryModule } from "joymap"

/**
 * Initialize joymap store to use across app
 */
export const joymap = createJoymap()

export type Player = {
  name: string
  module: QueryModule
}

/**
 * We create 2 players and attach joymap modules to track them
 */
export const players: Player[] = [`Player 1`].map((name, index) => {
  const module = createQueryModule()
  joymap.addModule(module)

  return {
    name,
    module,
  }
})
