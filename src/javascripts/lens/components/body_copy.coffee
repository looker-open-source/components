m = angular.module "lens.components.body_copy", []


m.controller "BodyCopyController", (
  $scope
) ->
  return this


m.directive "bodyCopy", ->
  controller: "BodyCopyController"
  restrict: "E"
  scope: {}
  template: template


template = """
<lens-main>

  <section id="BodyCopy">
    <h3>Caption</h3>
    <p>To turn some text into a caption, use the class <code>.caption</code>.</p>

    <p class="caption">Here's a beautiful little caption for ya.</p>

    <div class="guide-code">
      <pre><code class="language-html">&lt;p class="caption"&gt;Here's a beautiful little caption for ya.&lt;/p&gt;</code></pre>
    </div>

    <h3>Body</h3>
    <p>To turn some text into body copy, use the class <code>.body</code> or simply use the <code>&lt;p&gt;</code> tag.</p>

    <p class="body">Here's a beautiful little bit of body copy for ya.</p>

    <div class="guide-code">
      <pre><code class="language-html">&lt;p class="body"&gt;Here's a beautiful little caption for ya.&lt;/p&gt;</code></pre>
    </div>

    <h3>Bold</h3>
    <p>To turn some bold, use the class <code>.bold</code> or simply use the <code>&lt;strong&gt;</code> tag.</p>

    <p class="bold">Here's a beautiful little bit of bold using a class.</p>
    <p><strong>Here's a beautiful little bit of bold using the strong element.</strong></p>

    <div class="guide-code">
      <pre><code class="language-html">&lt;p class="bold"&gt;Here's a beautiful little bit of bold using a class.&lt;/p&gt;
&lt;p&gt;&lt;strong&gt;Here's a beautiful little bit of bold using the strong element.&lt;/strong&gt;&lt;/p&gt;</code></pre>
    </div>

    <h3>Regular</h3>
    <p>To turn some text back to normal font weight, use the class <code>.regular</code>. This may be used when you have a bunch of text bold but need a single word within in back to regular.</p>

    <p class="bold">Here's a beautiful little bit of bold <span class="regular">using</span> a class.</p>

    <div class="guide-code">
      <pre><code class="language-html">&lt;p class="bold"&gt;Here's a beautiful little bit of bold &lt;span class="regular"&gt;using&lt;/span&gt; a class.&lt;/p&gt;</code></pre>
    </div>

    <h3>Light</h3>
    <p>To turn some text to a light font weight, use the class <code>.light</code>.</p>

    <p class="light">Here's a beautiful little bit of bold using a class.</p>

    <div class="guide-code">
      <pre><code class="language-html">&lt;p class="light"&gt;Here's a beautiful little bit of bold using a class.&lt;/p&gt;</code></pre>
    </div>

    <h3>Italic</h3>
    <p>To turn some text to italics, use the class <code>.italic</code> or somply use the <code>&lt;em&gt;</code> element.</p>

    <p class="bold">Here's a beautiful little bit of bold <span class="regular">using</span> a class.</p>

    <div class="guide-code">
      <pre><code class="language-html">&lt;p class="bold"&gt;Here's a beautiful little bit of bold &lt;span class="regular"&gt;using&lt;/span&gt; a class.&lt;/p&gt;</code></pre>
    </div>

    <h3>Uppercase</h3>
    <p>To turn some text into uppercase, use the class <code>.caps</code>.</p>

    <p class="caps">here's a beautiful little bit of bold using a class.</p>

    <div class="guide-code">
      <pre><code class="language-html">&lt;p class="caps"&gt;here's a beautiful little bit of bold using a class.&lt;/p&gt;</code></pre>
    </div>

    <h3>Lowercase</h3>
    <p>To turn some text into lowercase, use the class <code>.lowercase</code>.</p>

    <p class="lowercase">HERE'S SOME LOWERCASE.</p>

    <div class="guide-code">
      <pre><code class="language-html">&lt;p class="lowercase"&gt;HERE'S SOME LOWERCASE.&lt;/p&gt;</code></pre>
    </div>

    <h3>Title Case</h3>
    <p>To turn some text into titlecase, use the class <code>.titlecase</code> or somply use the <code>&lt;em&gt;</code> element.</p>

    <p class="titlecase">here's a beautiful little bit of bold using a class.</p>

    <div class="guide-code">
      <pre><code class="language-html">&lt;p class="titlecase"&gt;here's a beautiful little bit of bold using a class.&lt;/p&gt;</code></pre>
    </div>
  </section>

</lens-main>
"""
