import React from 'react'

export default function JoinItem(props) {
  return (
    <>
      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {props.username}
                </th>
                <td class="px-6 py-4">
                    {props.email}
                </td>
          
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr> 
    </>
  )
}
