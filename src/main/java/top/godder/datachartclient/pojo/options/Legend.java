package top.godder.datachartclient.pojo.options;


/**
 * @author: godder
 * @date: 2018/12/27
 */
public class Legend {
    private boolean display = true;
    private String position = "top";

    public String getPosition() {
        return position;
    }

    public void setPosition(String position) {
        this.position = position;
    }

    public Legend(boolean display) {
        this.display = display;
    }

    public boolean isDisplay() {
        return display;
    }

    public void setDisplay(boolean display) {
        this.display = display;
    }


}
