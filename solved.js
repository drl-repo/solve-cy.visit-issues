describe('Solve cy.visit() ISSUE for non HTML response', function(){
  it('Modify response header content-type to html',function(){
      
      cy.intercept('GET','/users', (req)=>{
        req.continue((res)=>{
          res.headers['content-type'] = 'text/html'
        })
      })
      cy.visit('https://jsonplaceholder.typicode.com/users')
      //solved :)

  })
})
