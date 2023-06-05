import styles from "../styles/Header.module.css"

const Header = () => {
  return(
    <div>
      <h1
        style={{
          padding: '20px 0',
          lineHeight: '1.5em',
          color: '#aeadad',
          textAlign: 'center',
        }}
        className={styles.header}
      >To do list</h1>
    </div>
  )
}

export default Header;