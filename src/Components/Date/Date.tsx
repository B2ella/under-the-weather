import './Date.css'

export default function TodaysDate() {
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  
    return (
      <div className="date">
      <h1 className='today'>Today</h1>
      <p>{date}</p>
      </div>
    )
}