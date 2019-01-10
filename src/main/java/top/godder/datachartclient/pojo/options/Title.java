package top.godder.datachartclient.pojo.options;

/**
 * @author: godder
 * @date: 2018/12/27
 */
public class Title {
    private boolean display = true;
    private String text;

    public boolean isDisplay() {
        return display;
    }

    public void setDisplay(boolean display) {
        this.display = display;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }
}
