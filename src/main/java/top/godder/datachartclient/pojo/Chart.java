package top.godder.datachartclient.pojo;


/**
 * @author: godder
 * @date: 2018/12/27
 */
public class Chart<T extends Number> {
    private String type;
    private Data<T> data;
    private Options options;

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public Data<T> getData() {
        return data;
    }

    public void setData(Data<T> data) {
        this.data = data;
    }

    public Options getOptions() {
        return options;
    }

    public void setOptions(Options options) {
        this.options = options;
    }

//    public String toJson() {
//        StringBuilder stringBuilder = new StringBuilder();
//        stringBuilder.append('{');
//        stringBuilder.append("type:");
//        stringBuilder.append("\'" + type + "\'");
//        stringBuilder.append(',');
//        stringBuilder.append("data:");
//        stringBuilder.append(data.toJson());
//        stringBuilder.append(',');
//        stringBuilder.append("options:");
//        stringBuilder.append(options.toJson());
//        stringBuilder.append(',');
//        stringBuilder.append('}');
//        return stringBuilder.toString();
//    }
}
