package co.sys.generators;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class Generator {
	@RequestMapping("/")
	String index(){
		return "index";
	}
}