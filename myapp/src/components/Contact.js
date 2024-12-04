import React from 'react'

export default function Contact() {
  return (
    <div>
  <div class="container py-5">
        <h2 class="text-center mb-4 text-warning">Contact Us</h2>
        <div class="row">
          
            <div class="col-lg-6">
                <form>
                    <div class="mb-3">
                        <label for="name" class="form-label">Your Name</label>
                        <input type="text" class="form-control" id="name" placeholder="Enter your name"/>
                    </div>
                    <div class="mb-3">
                        <label for="email" class="form-label">Email Address</label>
                        <input type="email" class="form-control" id="email" placeholder="Enter your email"/>
                    </div>
                    <div class="mb-3">
                        <label for="message" class="form-label">Message</label>
                        <textarea class="form-control" id="message" rows="5" placeholder="Your message"></textarea>
                    </div>
                    <button type="submit" class="btn btn-warning">Send Message</button>
                </form>
            </div>
            
            <div class="col-lg-6">
              

                <h5 className='text-warning'>Follow Us</h5>
                <a href="https://www.facebook.com/profile.php?id=61564128366567 " class="ms-2 text-white"><i class="fa-brands fa-facebook text-primary"></i>Nimco Abdi Hassan</a> <br></br>
                <a href="https://www.facebook.com/profile.php?id=61564128366567 " class="ms-2 text-white"><i class="fa-brands fa-tiktok text-dark"></i>Nimco Abdi Hassan</a> <br></br>
                <a href="https://web.whatsapp.com/ " class="ms-2 text-white"><i class="fa-brands fa-whatsapp text-success"></i>Nimco Abdi Hassan</a>
               
        
            </div>
        </div>
    </div>

    <footer class="bg-dark text-white text-center py-3">
        <p>&copy; N/S-ONLINE-SHOP</p>
    </footer>
    </div>
  )
}
