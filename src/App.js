import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen'
import TokenScreen from './screens/TokenScreen'
import RegisterScreen from './screens/RegisterScreen'
function App() {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
        <Route path='/' component={HomeScreen} exact />
        <Route path='/login' component={LoginScreen}  />
        <Route path='/token' component={TokenScreen}  />
        <Route path='/register' component={RegisterScreen}  />
        </Container>

      </main>
      <Footer />
    </Router>
  );
}

export default App;
