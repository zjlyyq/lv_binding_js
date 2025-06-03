import { Render, Text, View } from 'lvgljs-ui'
import React, { useState } from 'react'
function App() {
    const [count, setCount] = useState(1)
    return (
        <View onClick={_ => {setCount(count + 1)}} style={{display: 'flex', "justify-content": 'flex-start'}}>
            <Text style={{'text-color': "red"}}>hello lvgljs</Text>
            <Text style={{'text-color': "red"}}>{count}</Text>
        </View>
    )
}


Render.render(<App />)