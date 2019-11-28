import * as React from 'react'
import { connect } from 'react-redux'
import { StoreState } from '../type/index'
import * as constants from '../constants/index'
import classname from 'classnames'
import './index.css'

interface AppProps {
  list: any[]
  dispatch: Function
}

const Index: React.FC<AppProps> = props => {
  const { list, dispatch } = props

  const [value, setValue] = React.useState('')

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch({ type: constants.ADD_TODO, value })
    setValue('')
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={value} onChange={onChange} />
        <button>add</button>
      </form>
      <ul>
        {list.length > 0 &&
          list.map(item => {
            return (
              <li
                className={classname({
                  active: item.done
                })}
                key={item.id}
                onClick={() => {
                  dispatch({ type: constants.CHANGE_TODO, id: item.id })
                }}
              >
                {item.name}{' '}
                <button
                  onClick={() => {
                    dispatch({ type: constants.DELETE_TOOD, id: item.id })
                  }}
                >
                  x
                </button>
              </li>
            )
          })}
      </ul>
    </div>
  )
}

const Wrap = connect(
  (state: StoreState) => ({
    list: state.list
  }),
  dispatch => ({ dispatch })
)

export default Wrap(Index)
