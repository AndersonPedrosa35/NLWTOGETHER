import renderWithRoute from './renderWithRoute';
import App from '../App';


describe('render the Login form', () => {
  it('should renders `crie sua conta`', () => {
    const { getByText, history } = renderWithRoute(<App />);

    history.push('/');
    const linkElement = getByText(/sala/i);
    expect(linkElement).toBeInTheDocument();
  });

  it('should renders a input type email', () => {
    
  })

})
