import React, { Component } from 'react';
import TempHeadshot from '../images/TempHeadshot.jpg'

export default class About extends Component {
  render() {
    return (
      <div className="About">
        <div className="About-content">
          <img className="About-image" src={TempHeadshot} alt="Erin Boyle Headshot" />

          <h5 className="About-text">About Erin Boyle</h5>
          <br /><br />
          <p className="About-text">Now let me be clear. For some, nagging questions remain. Why else would he define middle-class as someone making under five million dollars a year? How else could he propose hundreds of billions in tax breaks for big corporations and oil companies but not one penny of tax relief to more than one hundred million Americans? How else could he offer a health care plan that would actually tax people's benefits, or an education plan that would do nothing to help families pay for college, or a plan that would privatize Social Security and gamble your retirement? I have unequivocally prohibited the use of torture by the United States, and I have ordered the prison at Guantanamo Bay closed by early next year.</p>
          <br /><br />
          <p className= "About-text">Through hard work and perseverance my father got a scholarship to study in a magical place, America, that shone as a beacon of freedom and opportunity to so many who had come before. And although she can no longer travel, I know that she's watching tonight, and that tonight is her night as well. These are not opinions to be debated; these are facts to be dealt with. In ancient times and in our times, Muslim communities have been at the forefront of innovation and education.</p>
        </div>
      </div>
    )
  }
}
