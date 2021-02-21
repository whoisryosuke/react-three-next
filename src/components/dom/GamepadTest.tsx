import { players } from "@/helpers/joymap"
import useGamepad from "@/hooks/useGamepad"
import React, { useCallback, useEffect, useState } from "react"

interface Props {}

const GamepadTest = (props: Props) => {
  useGamepad()
  return (
    <div className='gamepad_input'>
      {players.map(({ module, name }) => {
        const id = module.getPadId()
        console.log(`player`, module, name, id, module.getButton(`start`).pressed)
        if (id) return module.getButton(`start`).pressed ? `Game Started` : `Press Start`
      })}
    </div>
  )
}

export default GamepadTest
