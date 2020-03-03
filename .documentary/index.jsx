/**
 * The footer for documentation.
 */
export const footer = () => {
  const alt = 'idiocc'
  const src = 'https://avatars1.githubusercontent.com/u/40834161?v=4&s=100'
  const href = 'https://www.idio.cc'
  const org = 'Idio'
  const year = new Date().getFullYear()
  return [
    (<table>
      <tr>
        <td>
          <img src={src} alt={alt} />
        </td>
        <td>
          © <a href={href}>{org}</a> {year}
        </td>
      </tr>
    </table>),
  ]
}