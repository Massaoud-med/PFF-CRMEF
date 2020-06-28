package com.DevIt.CRMEF.Controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.DevIt.CRMEF.Authentication.AuthenticationBean;

@RestController
@RequestMapping("/api/v1")
/* peut être utilisé avec tous fontend */
@CrossOrigin(origins="http://localhost:4200", allowedHeaders="*")
public class AuthController {
	
	@GetMapping(path = "/basicauth")
    public AuthenticationBean basicauth() {
        return new AuthenticationBean("");
    }

}

