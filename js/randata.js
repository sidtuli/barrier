var recodes = ["af","al","dz","ao","ag","ar","am","au","at","az","bs","bh","bd","bb","by","be","bz","bj","bt","bo","ba","bw","br","bn","bg","bf","bi","kh","cm","ca","cv","cf","td","cl","cn","co","cu","km","cd","cg","cr","ci","hr","cy","cz","dk","dj","dm","do","ec","eg","sv","gq","er","ee","et","fj","fi","fk","fr","ga","gl","gm","ge","de","gh","gr","gd","gf","gt","gn","gw","gy","ht","hn","hk","hu","is","in","id","ir","iq","ie","il","it","jm","jp","jo","kz","ke","ki","kp","kr","undefined","kw","kg","la","lv","lb","ls","lr","ly","lt","lu","mk","mg","mw","my","mv","ml","mt","mr","mu","mx","md","mn","me","ma","mz","mm","na","np","nl","nz","ni","ne","nc","ng","no","om","pk","pa","pg","py","pe","ph","pl","pt","qa","ro","ru","rw","ws","st","sa","sn","re","rs","sc","sl","so","sg","sk","si","sb","za","es","lk","kn","lc","vc","sd","sr","sz","se","ch","sy","tw","tj","tz","th","tl","tg","to","tt","tn","tr","tm","ug","ua","ae","gb","us","uy","uz","vu","ve","vn","ye","zm","zw"];
var sampledata = {};

for (i = 0; i < recodes.length; i++) {
    randRank = 1000000 * Math.random();
    country = recodes[i];
    sampledata[country] = randRank;
}