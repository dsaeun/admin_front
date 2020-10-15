import React from 'react'
import '../App.css'
import AdminSym from './AdminSym'
import AdminHos from './AdminHos'
import AdminDis from './AdminDis'

let AdminDisAdd = () => {
  return (
    <div>
      <table className="editDisTable">
        <tr>
          <td className="symTD">
            질병 : <AdminDis />
          </td>
        </tr>
      </table>
      <table className="editDisTable">
        <tr>
          <td className="symTD">
            증상 : <AdminSym />
          </td>
        </tr>
      </table>
      <table className="editDisTable">
        <tr>
          <td className="hosTD">
            진료 과목 : <AdminHos />
          </td>
        </tr>
      </table>
    </div>
  )
}

export default AdminDisAdd
