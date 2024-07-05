import todo from '../images/icon-todo.svg'
import calendar from '../images/icon-calendar.svg'
import reminders from '../images/icon-reminders.svg'
import planning from '../images/icon-planning.svg'

const Features = ({ showFeatures }) => {
  return (
    <div className={showFeatures ? 'feature_container' : 'hide'}>
      <ul className='lista_features'>
        <li>
          <img id='todo_icon' src={todo} alt='todo' /> Todo List
        </li>
        <li>
          <img id='calendar_icon' src={calendar} alt='calendar' /> Calendar
        </li>
        <li>
          <img id='reminders_icon' src={reminders} alt='reminders' /> Reminders
        </li>
        <li>
          <img id='planning_icon' src={planning} alt='planning' /> Planning
        </li>
      </ul>
    </div>
  )
}

export default Features
