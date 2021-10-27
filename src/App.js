
import "./App.css";
import Row from "./functionalComponents/Row";
import List from './functionalComponents/List'
import ListItem from './functionalComponents/ListItem'

function App() {
  return <>
      <Row justify='flex-start'>
        <List>
          <ListItem text='Neki Tekst' hasLogo></ListItem>
          <ListItem text='Neki Tekst' hasLogo></ListItem>
          <ListItem text='Neki Tekst' hasLogo></ListItem>
          <ListItem text='Neki Tekst' hasLogo></ListItem>
          
        </List>
      </Row>
  </>
}

export default App;
