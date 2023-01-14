import 'package:audioplayers/audioplayers.dart';
import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:device_info_plus/device_info_plus.dart';
import 'package:firebase_core/firebase_core.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:fluttertoast/fluttertoast.dart';
import 'package:intl/intl.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await Firebase.initializeApp(
      options: const FirebaseOptions(
          apiKey: "AIzaSyDBGBgTOvPMlfu6v6oZnnOoGaEi6jYpxuw",
          appId: "1:1025550141304:web:7d2c2c789d376457c92a8d",
          messagingSenderId: "1025550141304",
          projectId: "appologize-ea671",
          authDomain: "appologize-ea671.firebaseapp.com",
          storageBucket: "appologize-ea671.appspot.com",
          measurementId: "G-JT60LTVDY0"));
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: "From Tú",
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: MyHomePage(title: "Hi"),
    );
  }
}

class MyHomePage extends StatefulWidget {
  const MyHomePage({Key? key, required this.title}) : super(key: key);

  final String title;

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> with TickerProviderStateMixin {
  AudioPlayer player = AudioPlayer();
  var listText = [
    "Hi chị Hòa",
    "Biết ngay chị sẽ vào lại trang này mà :D",
    "Khi đọc được những dòng này,",
    "chắc hiện tại mình cũng đang không nói chuyện với nhau nữa nhỉ :))",
    "Hôm nay chắc vẫn như bao ngày",
    "Chị và em chắc cũng đang tất bật với các công việc, dự định trong cuộc sống",
    "Cũng đã trải qua ${DateTime.now().difference(DateTime(2022, 12, 16)).inDays} ngày, kể từ khi e quyết định biến mất",
    "Có thể chị đã có cuộc sống mới",
    "Bên cạnh người mà mình yêu thương",
    "Em hy vọng thời gian đã làm cho chị nguôi ngoai",
    "Có thể hôm nay chị chưa thể tha thứ cho em",
    "Nhưng, em rất muốn trở lại như trước",
    "Trang web này sẽ luôn tồn tại ở đây",
    "Để có thể nhận được lời tha thứ của chị",
    "Nếu như chị đã sẵn sàng",
    "Thì xin hãy click nút bên dưới",
    "Một thông báo sẽ được gửi đến em",
    "Và hy vọng chúng ta sẽ quay trở lại như những người bạn rất thân như trước",
    "Luôn chia sẻ mọi sự buồn vui",
    "Thôi đến đây thôi",
    "Làm phiền một ngày tươi đẹp của chị rồi",
    "Văn em hơi lủng củng",
    "Nên xin phép kết thúc tại đây",
    "Chúc ngày hôm nay và mọi ngày sắp tới của chị luôn vui vẻ, luôn tràn đầy năng lượng",
    "Và thành công với các dự định trong cuộc sống",
    "From Tú\nngười em đã từng rất thân thiết của chị"
  ];
  var currentText = "";
  late Animation<double> textOpacity;
  late Animation<double> textTransform;
  late Animation<double> buttonOpacity;
  late Animation<double> buttonStartOpacity;
  late Animation<double> opacityBackground;
  late Animation colorBackground;
  late AnimationController textController;
  late AnimationController buttonController;
  late AnimationController buttonStartController;
  late AnimationController changeThemeToLightController;
  late AnimationController changeThemeToDarkController;
  static final DeviceInfoPlugin deviceInfoPlugin = DeviceInfoPlugin();
  var hover = false;
  var hover2 = false;
  var hoverStart = false;
  bool isShowButton = false;
  bool isStart = false;
  FirebaseFirestore firestore = FirebaseFirestore.instance;
  CollectionReference message =
      FirebaseFirestore.instance.collection('message');
  CollectionReference traffic =
      FirebaseFirestore.instance.collection('traffic');
  TextEditingController textEditingController = TextEditingController();

  Map<String, dynamic> _readWebBrowserInfo(WebBrowserInfo data) {
    return <String, dynamic>{
      'browserName': describeEnum(data.browserName),
      'appCodeName': data.appCodeName,
      'appName': data.appName,
      'appVersion': data.appVersion,
      'deviceMemory': data.deviceMemory,
      'language': data.language,
      'languages': data.languages,
      'platform': data.platform,
      'product': data.product,
      'productSub': data.productSub,
      'userAgent': data.userAgent,
      'vendor': data.vendor,
      'vendorSub': data.vendorSub,
      'hardwareConcurrency': data.hardwareConcurrency,
      'maxTouchPoints': data.maxTouchPoints,
    };
  }

  @override
  void initState() {
    super.initState();
    sendTraffic();
    configAnimation();
  }

  configAnimation() {
    currentText = listText[i];
    textController =
        AnimationController(vsync: this, duration: const Duration(seconds: 4));
    buttonController =
        AnimationController(vsync: this, duration: const Duration(seconds: 4));
    buttonStartController =
        AnimationController(vsync: this, duration: const Duration(seconds: 4));
    changeThemeToLightController =
        AnimationController(vsync: this, duration: const Duration(seconds: 4));
    changeThemeToDarkController =
        AnimationController(vsync: this, duration: const Duration(seconds: 4));
    textOpacity = Tween<double>(
      begin: 0.0,
      end: 1.0,
    ).animate(
      CurvedAnimation(
        parent: textController,
        curve: const Interval(
          0.0,
          1,
          curve: Curves.ease,
        ),
      ),
    );
    opacityBackground = Tween<double>(
      begin: 0.0,
      end: 0.8,
    ).animate(
      CurvedAnimation(
        parent: changeThemeToLightController,
        curve: const Interval(
          0.0,
          1,
          curve: Curves.ease,
        ),
      ),
    );
    colorBackground = ColorTween(
      begin: Color(0xff2e2e2e),
      end: Color(0xff000000),
    ).animate(
      CurvedAnimation(
        parent: changeThemeToDarkController,
        curve: const Interval(
          0.0,
          1,
          curve: Curves.ease,
        ),
      ),
    );
    buttonStartOpacity = Tween<double>(
      begin: 0.0,
      end: 1.0,
    ).animate(
      CurvedAnimation(
        parent: buttonStartController,
        curve: const Interval(
          0.0,
          1,
          curve: Curves.ease,
        ),
      ),
    );
    textTransform = Tween<double>(
      begin: 0.8,
      end: 1.0,
    ).animate(
      CurvedAnimation(
        parent: textController,
        curve: const Interval(
          0.0,
          1,
          curve: Curves.ease,
        ),
      ),
    );
    buttonOpacity = Tween<double>(
      begin: 0.0,
      end: 1.0,
    ).animate(
      CurvedAnimation(
        parent: buttonController,
        curve: const Interval(
          0.0,
          1,
          curve: Curves.ease,
        ),
      ),
    );
    buttonStartController.forward();
  }

  playAudio() async {
    await player.play(AssetSource("audio.mp3"));
  }

  sendTraffic() async {
    var deviceData = _readWebBrowserInfo(await deviceInfoPlugin.webBrowserInfo);
    traffic.add({
      "broswer": deviceData['browserName'],
      "userAgent": deviceData['userAgent'],
      "platform": deviceData['platform'],
      "Time": DateFormat("dd/MM/yyyy hh:mm:ss").format(DateTime.now())
    });
  }

  Future<void> addMessage(bool isForgive) {
    // Call the user's CollectionReference to add a new user
    if (isForgive) {
      changeThemeToLightController.forward();
      changeThemeToDarkController.reverse();
    } else {
      changeThemeToDarkController.forward();
      changeThemeToLightController.reverse();
    }
    return message.add({
      "Tình trạng": isForgive ? "Đã tha thứ" : "Chưa tha thứ",
      "Thông điệp": textEditingController.text ?? "",
      "Thời gian gửi": DateFormat("dd/MM/yyyy hh:mm:ss").format(DateTime.now())
    }).then((value) {
      Fluttertoast.showToast(
          msg: "Gửi thành công, chờ nhé",
          toastLength: Toast.LENGTH_LONG,
          webPosition: "right",
          gravity: ToastGravity.CENTER,
          timeInSecForIosWeb: 5,
          backgroundColor: Colors.red,
          textColor: Colors.white,
          fontSize: 16.0);
      textEditingController.clear();
    }).catchError((error) {
      Fluttertoast.showToast(
          msg:
              "Gửi thất bại rồi :((. Có lẽ Messenger cũng không phải là một ý tưởng tồi :3",
          toastLength: Toast.LENGTH_LONG,
          webPosition: "right",
          gravity: ToastGravity.CENTER,
          timeInSecForIosWeb: 5,
          backgroundColor: Colors.red,
          textColor: Colors.white,
          fontSize: 16.0);
    });
  }

  int i = 0;

  runAnimation() {
    textController.forward();
    textController.addStatusListener((status) {
      if (status == AnimationStatus.completed) {
        i++;
        int indexShowButton =
            listText.indexOf("Thì xin hãy click nút bên dưới");
        if (i < listText.length) {
          currentText = listText[i];
          textController.reset();
          textController.forward();
        }
        if (i == indexShowButton) {
          setState(() {
            isShowButton = true;
          });
          buttonController.forward();
        }
      }
    });
  }

  @override
  Widget build(BuildContext context) {
    return AnimatedBuilder(
        animation: changeThemeToDarkController,
        builder: (context, child) {
          return Scaffold(
            backgroundColor: colorBackground.value,
            body: Stack(
              children: [
                AnimatedBuilder(
                    animation: changeThemeToLightController,
                    builder: (context, child) {
                      return Opacity(
                        opacity: opacityBackground.value,
                        child: Image.asset(
                          "assets/images/background3.jpg",
                          width: MediaQuery.of(context).size.width,
                          height: MediaQuery.of(context).size.height,
                          fit: BoxFit.cover,
                        ),
                      );
                    }),
                Center(
                  child: !isStart
                      ? buttonStart()
                      : Column(
                          mainAxisAlignment: MainAxisAlignment.center,
                          children: <Widget>[
                            Container(
                              height: MediaQuery.of(context).size.height / 2,
                              alignment: Alignment.center,
                              child: AnimatedBuilder(
                                builder:
                                    (BuildContext context, Widget? child) =>
                                        Opacity(
                                  opacity: textOpacity.value,
                                  child: Transform.scale(
                                    scale: textTransform.value,
                                    child: Padding(
                                      padding:
                                          EdgeInsets.symmetric(horizontal: 50),
                                      child: Text(
                                        currentText,
                                        style: const TextStyle(
                                            color: Colors.white,
                                            fontSize: 40,
                                            fontFamily: 'Anton'),
                                        textAlign: TextAlign.center,
                                      ),
                                    ),
                                  ),
                                ),
                                animation: textController,
                              ),
                            ),
                            Visibility(
                              visible: isShowButton,
                              child: AnimatedBuilder(
                                builder:
                                    (BuildContext context, Widget? child) =>
                                        Opacity(
                                  opacity: buttonOpacity.value,
                                  child: _buildButton(),
                                ),
                                animation: buttonController,
                              ),
                            ),
                          ],
                        ),
                ),
              ],
            ), // This trailing comma makes auto-formatting nicer for build methods.
          );
        });
  }

  _buildButton() {
    return Column(
      children: [
        Container(
          width: 300,
          child: TextField(
            controller: textEditingController,
            cursorColor: Colors.white,
            style: TextStyle(color: Colors.white),
            decoration: const InputDecoration(
              disabledBorder: OutlineInputBorder(
                  borderSide: BorderSide(
                color: Colors.white,
                width: 1,
                style: BorderStyle.solid,
              )),
              focusColor: Colors.white,
              border: OutlineInputBorder(
                  borderSide: BorderSide(
                      color: Colors.white, width: 1, style: BorderStyle.solid)),
              errorBorder: OutlineInputBorder(
                  borderSide: BorderSide(
                      color: Colors.white, width: 1, style: BorderStyle.solid)),
              enabledBorder: OutlineInputBorder(
                  borderSide: BorderSide(
                      color: Colors.white, width: 1, style: BorderStyle.solid)),
              focusedBorder: OutlineInputBorder(
                  borderSide: BorderSide(
                      color: Colors.white, width: 1, style: BorderStyle.solid)),
              labelText: 'Có muốn nhắn nhủ gì không?',
              hintStyle: TextStyle(color: Colors.white),
              labelStyle: TextStyle(color: Colors.white),
            ),
          ),
        ),
        const SizedBox(
          height: 20,
        ),
        InkWell(
          onTap: () {
            addMessage(true);
          },
          onHover: (hovered) {
            setState(() {
              hover = hovered;
            });
          },
          child: Container(
            decoration: BoxDecoration(
                color: hover ? Colors.white : Colors.black,
                border: Border.all(
                  color: hover ? Colors.white : Colors.white,
                ),
                borderRadius: BorderRadius.circular(3)),
            padding: EdgeInsets.symmetric(horizontal: 10, vertical: 10),
            child: Text(
              "Bấm nút này nếu chị đã tha thứ cho em!",
              style: TextStyle(
                  color: hover ? Colors.black : Colors.white,
                  fontFamily: 'Anton'),
            ),
          ),
        ),
        SizedBox(
          height: 20,
        ),
        InkWell(
          onTap: () {
            addMessage(false);
          },
          onHover: (hovered) {
            setState(() {
              hover2 = hovered;
            });
          },
          child: Container(
            decoration: BoxDecoration(
                color: hover2 ? Colors.white : Colors.black,
                border: Border.all(
                  color: hover2 ? Colors.white : Colors.white,
                ),
                borderRadius: BorderRadius.circular(3)),
            padding: EdgeInsets.symmetric(horizontal: 10, vertical: 10),
            child: Text(
              "Bấm nút này nếu chị vẫn chưa sẵn sàng :((",
              style: TextStyle(
                  color: hover2 ? Colors.black : Colors.white,
                  fontFamily: 'Anton'),
            ),
          ),
        ),
      ],
    );
  }

  buttonStart() {
    return AnimatedBuilder(
      animation: buttonStartController,
      builder: (context, child) => Opacity(
        opacity: buttonStartOpacity.value,
        child: InkWell(
          onTap: () {
            setState(() {
              isStart = true;
            });
            runAnimation();
            playAudio();
          },
          onHover: (hovered) {
            setState(() {
              hoverStart = hovered;
            });
          },
          child: Container(
            decoration: BoxDecoration(
                color: hoverStart ? Colors.white : Colors.black,
                border: Border.all(
                  color: hoverStart ? Colors.white : Colors.white,
                ),
                borderRadius: BorderRadius.circular(3)),
            padding: EdgeInsets.symmetric(horizontal: 10, vertical: 10),
            child: Text(
              "Bắt đầu",
              style: TextStyle(
                  color: hoverStart ? Colors.black : Colors.white,
                  fontSize: 30,
                  fontFamily: 'Anton'),
            ),
          ),
        ),
      ),
    );
  }
}
