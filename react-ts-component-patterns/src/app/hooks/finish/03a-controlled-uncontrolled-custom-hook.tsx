import React, { Component, useState, useEffect } from 'react'

import { Button } from './02-stateless-stateful'
import { useStateWithCb } from './hooks';
// ============================================================================

type State = typeof initialState
type Props = Partial<State> & typeof defaultProps

const initialState = { count: 0, clicked: 0 }
const defaultProps = {
  onChange: (value: number) => {}
}

const Counter = (props: Props) => {
  // const [state,setState] = useState(initialState)
  const [state,setState] = useStateWithCb(initialState,()=>{
    props.onChange(getState().count)
  },'count')

  const getState = () => {
    return {
      count: props.count != null ? props.count : state.count
    }
  }

  const handleChange = (type: 'inc' | 'dec') => () => {
    if (props.count != null) {
      props.onChange(getState().count + typeMap[type])
    } else {
      setState(
        (state) => ({...state, count: state.count + typeMap[type] }),
      )
    }
  }

  const handleInc = handleChange('inc')
  const handleDec = handleChange('dec')

  // useEffect(() => {
  //   props.onChange(getState().count)
  //   console.log('effect run')
  // },[state.count])


    return (
      <div className="border row">
      <Button onClick={()=>setState(state=>({...state,clicked: state.clicked+1}))}>
        <span>clicked {state.clicked}</span>
      </Button>
        <Button onClick={handleInc}>👍</Button>
        <h3>{getState().count}</h3>
        <Button onClick={handleDec}>👎</Button>
      </div>
    )
}

Counter.defaultProps = defaultProps


// ============================================================================
export class Example extends Component<{}, State> {
  static title = 'Un/Controlled'
  state = initialState
  handleChange = (newCount: number) => {
    this.setState((state) => ({ count: newCount }))
  }
  render() {
    return (
      <>
        <h3>Root count: {this.state.count}</h3>

        <section>
          <h5>Uncontrolled</h5>
          <Counter />
        </section>
        <section>
          <h5>Controlled</h5>
          <Counter count={this.state.count} onChange={this.handleChange} />
        </section>
        <section>
          <h5>
            Uncontrolled emitter <small>updates parent state only</small>
          </h5>
          <Counter onChange={this.handleChange} />
        </section>
      </>
    )
  }
}

// ============================================================================
// helpers
const typeMap = { inc: 1, dec: -1 }
