package top.godder.datachartclient.controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.Map;

/**
 * @author: godder
 * @date: 2018/12/27
 */
@Controller

public class WelcomeController {
    @Value("${welcome.message:test}")
    private String message = "hello";

    @RequestMapping("/")
    public String welcome(ModelMap modelMap) {
        return "welcome";
    }

    @GetMapping("/charts")
    public String charts(ModelMap modelMap) {
        return "charts";
    }
}
