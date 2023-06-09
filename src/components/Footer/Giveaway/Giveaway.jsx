import React,{useState,useEffect} from 'react'
import "./Giveaway.styles.css"
import Navbar from '../../Navbar/Navbar'
import { Link } from 'react-router-dom'

function Giveaway() {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    fetch('/api/table-data')  // Replace with the actual URL of your backend API
      .then(response => response.json())
      .then(data => setTableData(data))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div>
      <div className='giveaway-navbar'>
        <Navbar />
      </div>
      <div className='giveaway-container'>
        <div>
          <h2 className='giveaway-heading'>Giveaway</h2>
        </div>
        <div>
          <h5>Eligibility:</h5>
          <p>All citizens of India above the age of 18 are eligible to participate in this contest.</p>
        </div>
        <div>
          <h3>Entry Requirements:</h3>
          <p>To participate in this giveaway, one must follow the below steps:</p>
          <p>1. Register their profile (resume) at <Link to="" className='giveaway-link'>www.truetalent.io.</Link> The registration must be complete with all details filled. Partially completed profile will make the participant ineligible.</p>
          <p>2. Besides completing the first step, participants must follow at least one of the social media (Facebook, Instagram, Linkedin, Twitter, Youtube) handles of TrueTalent.io. The links to the social media handles are provided below for easy reference.</p>
          <Link to="https://www.facebook.com/Truetalent.io" className='giveaway-link'>https://www.facebook.com/Truetalent.io</Link><br/>
          <Link to="https://www.linkedin.com/company/truetalent-io/" className='giveaway-link'>https://www.linkedin.com/company/truetalent-io/</Link><br/>
          <Link to="https://twitter.com/Truetalent_io" className='giveaway-link'>https://twitter.com/Truetalent_io</Link><br/>
          <Link to="https://www.instagram.com/Truetalent_io/" className='giveaway-link'>https://www.instagram.com/Truetalent_io/</Link><br/>
          <Link to="https://www.youtube.com/@TrueTalent_io" className='giveaway-link'>https://www.youtube.com/@TrueTalent_io</Link><br/>
        </div>
        <br/>
        <div>
          <h5>Start and End Dates:</h5>
          <p>The giveaway begins on April 9, 2023, at 00:01 IST and ends on June 30, 2023, at 11:59 IST. Any participants outside of these dates would not be eligible for the giveaways.</p>
        </div>
        <br/>
        <div>
          <h5>Prize:</h5>
          <p>The grand prize for the contest period is a HP laptop, and there will be one grand prize. Every month, there will be one monthly prize winner who will receive a Oneplus mobile phone. Every week, there will be 5 winners who will receive Amazon gift vouchers worth INR 1,000. Winners of the weekly and monthly prizes would be able to enter the grand prize contest.</p>
        </div>
        <div>
          <h5>Notification:</h5>
          <p>All the winner names would be announced on the TrueTalent website and on all social media handles of TrueTalent. Winners must claim their prize within 15 days of the result announcement.</p>
        </div>
        <br />
        <div>
          <h5>Publicity Rights:</h5>
          <p>TrueTalent.io and its parent company, FindrPro Technology Solutions Pvt. Ltd., will reserve the right to use the name, photograph, city of residence, and a brief profile of the person (without their personal details like phone number or email address) on their websites, social media handles, and other promotional channels like emails and other forms of communication for the purpose of publicity.</p>
        </div>
        <div>
          <h5>Disclaimer:</h5>
          <p>This contest and giveaway are completely sponsored by FindrPro Technology Solutions, and the brands used for the giveaway items are in no way associated with this contest and giveaway.</p>
        </div>
        <div>
          <h5>Limitation of Liability:</h5>
          <p>TrueTalent, its parent company, FindrPro Technology Solutions, or its promoters and employees are not responsible for any injury, loss, or damage resulting from participation in the contest.</p>
        </div>
        <br />
        <div>
          <h5>Governing Law:</h5>
          <p>Any dispute arising from this contest is governed by the legal jurisdiction of Bangalore, Karnataka, India.</p>
        </div>
        <br />
        <div>
          <h5>Employee Exclusion:</h5>
          <p>Employees and the immediate family members of TrueTalent, FindrPro Technology Solutions, their partners, and partner organization employees are not eligible to participate in the contest.</p>
        </div>
        <br />
        <div>
          <h5>Multiple Entries:</h5>
          <p>Participants registering on<Link to="www.truetalent.io" className='giveaway-link' >www.truetalent.io</Link> and following multiple social media handles of TrueTalent would be eligible for more than one entry.
              All weekly winners would be eligible for the monthly giveaways, and all monthly winners would be eligible for the grand prize.</p>
        </div>
        <div>
          <h5>Disqualification:</h5>
          <p>In case any participant did not fulfill all the criteria mentioned in the entry requirement point, they would be ineligible for the lucky draw. The decision of TrueTalent, FindrPro, and their representatives would be final and binding.</p>
        </div>
        <br />
        <div>
          <h5>Modification or Cancellation:</h5>
          <p>TrueTalent.io and its parent company, FindrPro Technology Solutions Pvt. Ltd., reserve the right to modify or cancel the contest at any time if there are technical difficulties or if fraud is suspected.</p>
        </div>
        <br />
        <div>
          <h5>Taxes and Fees:</h5>
          <p>If any tax liability arises out of these give-aways, which are personal to the winners, the same would be borne in entirety by the winner. TrueTalent.io and its parent company, FindrPro Technology Solutions Pvt. Ltd., will not be liable to pay any taxes other than the tax collected during the purchase of the items.</p>
        </div>
        <br />
        <div>
          <h5>Transferability:</h5>
          <p>The prize(s) are non-transferable and cannot be converted to equivalent cash under any circumstance.</p>
        </div>
        <br />
        <div>
          <h5>Release of Liability:</h5>
          <p>This giveaway requires participants to release TrueTalent.io and its parent company, FindrPro Technology Solutions Pvt. Ltd., from any liability associated with the contest or the prize given away.</p>
        </div>
        <br />
        <div>
          <h5>Intellectual Property:</h5>
          <p>TrueTalent.io and its parent company, FindrPro Technology Solutions Pvt. Ltd., own the intellectual property associated with the contest, including any content submitted by participants. All information collected during this contest period can be used by TrueTalent.io or FindrPro Technology Solutions Pvt. Ltd. for the primary purpose of making the resumes of such participants available on their website for the purpose of allowing their clients to search for and contact relevant candidates for offering jobs and/or gigs.</p>
        </div>
        <br />
        <div>
          <h5>Severability:</h5>
          <p>In the event that any part of these terms and conditions is found to be unenforceable or invalid, the remaining provisions will still be binding.</p>
        </div>
      </div>
      <div>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>startdate</th>
            <th>enddate</th>
            <th>Name</th>
            <th>Email</th>
            <th>Location</th>
            <th>Registration</th>
            
          </tr>
        </thead>
        <tbody>
          {tableData.map(row => (
            <tr key={row.column1}>
              <td>{row.column1}</td>
              <td>{row.column2}</td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  )
}

export default Giveaway
