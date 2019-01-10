package top.godder.datachartclient.pojo.data;

/**
 * @author: godder
 * @date: 2018/12/31
 */
public enum Colors {
    RED("#FF0000"), rebeccapurple("#663399"), LIME("#00FF00"), GREEN("#008000"), BLUE("#0000FF"), YELLOW("#FFFF00"),
    AQUA("#FFFF00"), PINK("#FF00FF"), GOLD("#FFD700"), GRAY("#808080"), BLACK("#000000"), WHITE("#FFFFFF");
    private String rgb;

    private Colors(String rgb) {
        this.rgb = rgb;
    }

    public String getRgb() {
        return rgb;
    }
}
